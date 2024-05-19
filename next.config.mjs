/** @type {import('next').NextConfig} */

/** TODO: fix The requested resource isn't a valid image for /trello.png received text/html; charset=utf-8
 * ImageError: The requested resource isn't a valid image.
 */
const nextConfig = {
  images: {
    disableStaticImages: true
  }
};

export default nextConfig;
