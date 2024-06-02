import { toast } from "react-toastify";

// 0.5 sec.
const TOAST_DISPLAY_DURATION = 500;

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!", { autoClose: TOAST_DISPLAY_DURATION });
    } catch (err) {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy to clipboard.", { autoClose: TOAST_DISPLAY_DURATION });
    }
};

export const handleCopyClick = (text: string) => () => {
    copyToClipboard(text);
};