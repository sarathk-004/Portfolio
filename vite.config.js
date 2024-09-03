export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
