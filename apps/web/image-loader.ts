const CDN_URL = "https://frontendpages.com";

type Props = {
  src: string;
  width: number;
  quality?: number;
};

const localHosts = ["localhost", "127.0.0.1", "[::1]", "local.web.frontendpages.id"];

export default function imageLoader({ src, width, quality = 80 }: Props): string {
  // Skip CDN optimization for localhosts  (local development)
  if (localHosts.some((host) => src.includes(host))) {
    return src;
  }

  // In development, serve local images without CDN
  if (process.env.NODE_ENV === "development") {
    if (src.startsWith("/")) {
      return `${src}?w=${width}&q=${quality}`;
    }
    return src;
  }

  // In preview, skip Cloudflare CDN (not available on preview URLs)
  const isPreview = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

  if (isPreview && vercelUrl) {
    if (src.startsWith("/")) {
      return `https://${vercelUrl}${src}`;
    }
    return src;
  }

  // Production: use Cloudflare CDN transformation
  // Added custom path /img instead of /cdn-gci/image
  /** @see https://developers.cloudflare.com/images/transform-images/serve-images-custom-paths/ */
  if (src.startsWith("/_next")) {
    return `${CDN_URL}/img/width=${width},quality=${quality}/${CDN_URL}${src}`;
  }

  if (src.startsWith("/")) {
    return `${CDN_URL}/img/width=${width},quality=${quality}/${CDN_URL}${src}`;
  }

  return `${CDN_URL}/img/width=${width},quality=${quality}/${src}`;
}
