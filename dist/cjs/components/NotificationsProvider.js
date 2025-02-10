"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationProvider = exports.useNotifications = exports.NotificationContext = void 0;
require("../utils/nextjs-check");
const react_1 = __importStar(require("react"));
const Notifications_1 = __importDefault(require("./Notifications"));
// Client-side check
const isClient = typeof window !== 'undefined';
exports.NotificationContext = (0, react_1.createContext)(undefined);
const useNotifications = () => {
    const context = (0, react_1.useContext)(exports.NotificationContext);
    if (!context) {
        throw new Error('useNotifications must be used within NotificationProvider');
    }
    return context;
};
exports.useNotifications = useNotifications;
const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = (0, react_1.useState)([]);
    if (!isClient) {
        return react_1.default.createElement(react_1.default.Fragment, null, children); // SSR için sadece children render
    }
    const notify = (options) => {
        const id = Date.now();
        const notification = Object.assign(Object.assign({}, options), { id });
        setNotifications(prev => [...prev, notification]);
        if (options.duration !== 0) {
            setTimeout(() => {
                setNotifications(prev => prev.filter(n => n.id !== id));
            }, options.duration || 3000);
        }
    };
    const clear = () => {
        setNotifications([]);
    };
    return (react_1.default.createElement(exports.NotificationContext.Provider, { value: { notify, clear } },
        children,
        react_1.default.createElement(Notifications_1.default, { notifications: notifications, onClose: (id) => setNotifications(prev => prev.filter(n => n.id !== id)) })));
};
exports.NotificationProvider = NotificationProvider;
exports.default = exports.NotificationProvider;
