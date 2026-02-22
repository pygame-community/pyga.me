import Head from 'next/head';

// Vanity redirect to Discord invite.
// Hacky and will eventually be superseded by a DNS-level redirect (e.g. using Cloudflare)
// Uses a meta refresh tag to avoid js
export default function Discord() {
  return (
    <Head>
      <meta httpEquiv="refresh" content="0; url=https://discord.com/invite/pygame-community-772505616680878080" />
    </Head>
  );
}
