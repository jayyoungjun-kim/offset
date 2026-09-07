export function isLegacyProductionRequest(request: Request) {
  return new URL(request.url).hostname === 'portfolio-workshop-1.jayyoungjunkim.chatgpt.site'
    && request.headers.get('origin') === 'https://offset.quest';
}
