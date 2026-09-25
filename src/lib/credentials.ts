// Generates placeholder IPTV access credentials.
// TODO: replace with a call to your real IPTV panel/reseller API (e.g. Xtream Codes).
export function generateCredentials(email: string) {
  const rand = (n: number) =>
    Math.random().toString(36).slice(2, 2 + n).toUpperCase();
  const username = `RO${rand(6)}`;
  const password = rand(10);
  return { username, password, portal: "http://your-iptv-panel.example:8080" , email };
}
