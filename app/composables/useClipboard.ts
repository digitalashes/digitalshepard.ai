export function useClipboard() {
    async function copy(text: string) {
        await navigator.clipboard.writeText(text);
    }

    return { copy };
}
