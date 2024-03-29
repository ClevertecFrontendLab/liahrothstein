export default function getCookie(name: string): string | undefined {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return (matches ? decodeURIComponent(matches[1]) : undefined)
}