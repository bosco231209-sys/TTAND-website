import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const repoEnv = process.env.GITHUB_REPOSITORY;
  const isGithubActions = !!repoEnv;
  const repoName = isGithubActions && repoEnv ? repoEnv.split('/')[1] : '';
  
  // If the repository name is "username.github.io", it's a user/org page hosted at the root (https://username.github.io/)
  // and the base path must be '/' instead of '/username.github.io/'
  const isUserPage = repoName.toLowerCase().endsWith('.github.io');
  const base = isGithubActions ? (isUserPage ? '/' : `/${repoName}/`) : './';

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
