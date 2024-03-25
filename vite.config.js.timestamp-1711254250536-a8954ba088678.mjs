// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/NeiL/Desktop/Cafe-Website/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/NeiL/Desktop/Cafe-Website/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import eslintPlugin from "file:///C:/Users/NeiL/Desktop/Cafe-Website/node_modules/vite-plugin-eslint/dist/index.mjs";
import VueDevTools from "file:///C:/Users/NeiL/Desktop/Cafe-Website/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";

// loadEnv.js
import dotenv from "file:///C:/Users/NeiL/Desktop/Cafe-Website/node_modules/dotenv/lib/main.js";
import path from "path";
import fs from "fs";
var getCurrentTimeString = () => {
  const now = /* @__PURE__ */ new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348";
  hours %= 12;
  hours = hours || 12;
  const hoursStr = String(hours).padStart(2, "0");
  return `${ampm}${hoursStr}:${minutes}:${seconds}`;
};
var customLog = (tag, message, tagColor = "\x1B[36m", messageColor = "\x1B[32m") => {
  const timeString = getCurrentTimeString();
  console.log(`\x1B[90m%s\x1B[0m ${tagColor}\x1B[1m%s\x1B[0m ${messageColor}%s\x1B[0m`, timeString, `[${tag}]`, message);
};
var loadEnv_default = (mode) => {
  const basePath = path.resolve(process.cwd(), ".env");
  const envPath = `${basePath}.${mode}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const envConfig = dotenv.config({ path: finalPath });
  if (envConfig.error) {
    customLog("vite", "\u7121\u6CD5\u8B80\u53D6\u5230\u74B0\u5883\u8B8A\u6578(Environment Variables)\u6A94\u6848\u3002");
    customLog("vite", "\u8ACB\u5728\u7D42\u7AEF\u6A5F\u8F38\u5165\u300Ccp .env.example .env\u300D \u5EFA\u7ACB\u74B0\u5883\u8B8A\u6578\u6A94\u6848\u3002");
    customLog("vite", "\u76EE\u524D\u50C5\u652F\u63F4 .env\u3001.env.development\u3001.env.production \u4E09\u7A2E\u6A21\u5F0F\u3002");
  }
};

// vite.config.js
var __vite_injected_original_import_meta_url = "file:///C:/Users/NeiL/Desktop/Cafe-Website/vite.config.js";
var INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
var DRIVE_LETTER_REGEX = /^[a-z]:/i;
var vite_config_default = defineConfig(({ mode }) => {
  loadEnv_default(mode);
  return {
    base: process.env.NODE_ENV === "production" ? `/${process.env.REPOSITORY_NAME}/` : "/",
    plugins: [
      vue(),
      eslintPlugin({
        include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"]
      }),
      VueDevTools()
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : "";
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "");
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAibG9hZEVudi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE5laUxcXFxcRGVza3RvcFxcXFxDYWZlLVdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE5laUxcXFxcRGVza3RvcFxcXFxDYWZlLVdlYnNpdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL05laUwvRGVza3RvcC9DYWZlLVdlYnNpdGUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJztcbmltcG9ydCBsb2FkRW52IGZyb20gJy4vbG9hZEVudic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCBJTlZBTElEX0NIQVJfUkVHRVggPSAvW1xceDAwLVxceDFGXFx4N0Y8PiojXCJ7fXxeW1xcXWA7PzomPSskLF0vZztcbmNvbnN0IERSSVZFX0xFVFRFUl9SRUdFWCA9IC9eW2Etel06L2k7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGxvYWRFbnYobW9kZSk7XG4gIHJldHVybiAoe1xuICAgIGJhc2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBgLyR7cHJvY2Vzcy5lbnYuUkVQT1NJVE9SWV9OQU1FfS9gIDogJy8nLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgZXNsaW50UGx1Z2luKHtcbiAgICAgICAgaW5jbHVkZTogWydzcmMvKiovKi5qcycsICdzcmMvKiovKi52dWUnLCAnc3JjLyouanMnLCAnc3JjLyoudnVlJ10sXG4gICAgICB9KSxcbiAgICAgIFZ1ZURldlRvb2xzKCksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3Nhbml0aXplRmlsZU5hbWUudHNcbiAgICAgICAgICBzYW5pdGl6ZUZpbGVOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gRFJJVkVfTEVUVEVSX1JFR0VYLmV4ZWMobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBkcml2ZUxldHRlciA9IG1hdGNoID8gbWF0Y2hbMF0gOiAnJztcbiAgICAgICAgICAgIC8vIHN1YnN0ciBcdTY2MkZcdTg4QUJcdTZERDhcdTZDNzBcdThBOUVcdTZDRDVcdUZGMENcdTU2RTBcdTZCNjRcdTg5ODFcdTY1Mzkgc2xpY2VcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIGRyaXZlTGV0dGVyXG4gICAgICAgICAgICArIG5hbWUuc2xpY2UoZHJpdmVMZXR0ZXIubGVuZ3RoKS5yZXBsYWNlKElOVkFMSURfQ0hBUl9SRUdFWCwgJycpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE5laUxcXFxcRGVza3RvcFxcXFxDYWZlLVdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE5laUxcXFxcRGVza3RvcFxcXFxDYWZlLVdlYnNpdGVcXFxcbG9hZEVudi5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTmVpTC9EZXNrdG9wL0NhZmUtV2Vic2l0ZS9sb2FkRW52LmpzXCI7aW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCBnZXRDdXJyZW50VGltZVN0cmluZyA9ICgpID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgbGV0IGhvdXJzID0gbm93LmdldEhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3Qgc2Vjb25kcyA9IFN0cmluZyhub3cuZ2V0U2Vjb25kcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnXHU0RTBCXHU1MzQ4JyA6ICdcdTRFMEFcdTUzNDgnO1xuICBob3VycyAlPSAxMjtcbiAgaG91cnMgPSBob3VycyB8fCAxMjtcbiAgY29uc3QgaG91cnNTdHIgPSBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIHJldHVybiBgJHthbXBtfSR7aG91cnNTdHJ9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG59O1xuXG5jb25zdCBjdXN0b21Mb2cgPSAodGFnLCBtZXNzYWdlLCB0YWdDb2xvciA9ICdcXHgxYlszNm0nLCBtZXNzYWdlQ29sb3IgPSAnXFx4MWJbMzJtJykgPT4ge1xuICBjb25zdCB0aW1lU3RyaW5nID0gZ2V0Q3VycmVudFRpbWVTdHJpbmcoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS5sb2coYFxceDFiWzkwbSVzXFx4MWJbMG0gJHt0YWdDb2xvcn1cXHgxYlsxbSVzXFx4MWJbMG0gJHttZXNzYWdlQ29sb3J9JXNcXHgxYlswbWAsIHRpbWVTdHJpbmcsIGBbJHt0YWd9XWAsIG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKG1vZGUpID0+IHtcbiAgY29uc3QgYmFzZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy5lbnYnKTtcbiAgY29uc3QgZW52UGF0aCA9IGAke2Jhc2VQYXRofS4ke21vZGV9YDtcbiAgY29uc3QgZmluYWxQYXRoID0gZnMuZXhpc3RzU3luYyhlbnZQYXRoKSA/IGVudlBhdGggOiBiYXNlUGF0aDtcblxuICBjb25zdCBlbnZDb25maWcgPSBkb3RlbnYuY29uZmlnKHsgcGF0aDogZmluYWxQYXRoIH0pO1xuXG4gIGlmIChlbnZDb25maWcuZXJyb3IpIHtcbiAgICBjdXN0b21Mb2coJ3ZpdGUnLCAnXHU3MTIxXHU2Q0Q1XHU4QjgwXHU1M0Q2XHU1MjMwXHU3NEIwXHU1ODgzXHU4QjhBXHU2NTc4KEVudmlyb25tZW50IFZhcmlhYmxlcylcdTZBOTRcdTY4NDhcdTMwMDInKTtcbiAgICBjdXN0b21Mb2coJ3ZpdGUnLCAnXHU4QUNCXHU1NzI4XHU3RDQyXHU3QUVGXHU2QTVGXHU4RjM4XHU1MTY1XHUzMDBDY3AgLmVudi5leGFtcGxlIC5lbnZcdTMwMEQgXHU1RUZBXHU3QUNCXHU3NEIwXHU1ODgzXHU4QjhBXHU2NTc4XHU2QTk0XHU2ODQ4XHUzMDAyJyk7XG4gICAgY3VzdG9tTG9nKCd2aXRlJywgJ1x1NzZFRVx1NTI0RFx1NTBDNVx1NjUyRlx1NjNGNCAuZW52XHUzMDAxLmVudi5kZXZlbG9wbWVudFx1MzAwMS5lbnYucHJvZHVjdGlvbiBcdTRFMDlcdTdBMkVcdTZBMjFcdTVGMEZcdTMwMDInKTtcbiAgfVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1MsU0FBUyxlQUFlLFdBQVc7QUFFclUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBR2hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8saUJBQWlCOzs7QUNQa1EsT0FBTyxZQUFZO0FBQzdTLE9BQU8sVUFBVTtBQUNqQixPQUFPLFFBQVE7QUFFZixJQUFNLHVCQUF1QixNQUFNO0FBQ2pDLFFBQU0sTUFBTSxvQkFBSSxLQUFLO0FBQ3JCLE1BQUksUUFBUSxJQUFJLFNBQVM7QUFDekIsUUFBTSxVQUFVLE9BQU8sSUFBSSxXQUFXLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4RCxRQUFNLFVBQVUsT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hELFFBQU0sT0FBTyxTQUFTLEtBQUssaUJBQU87QUFDbEMsV0FBUztBQUNULFVBQVEsU0FBUztBQUNqQixRQUFNLFdBQVcsT0FBTyxLQUFLLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDOUMsU0FBTyxHQUFHLElBQUksR0FBRyxRQUFRLElBQUksT0FBTyxJQUFJLE9BQU87QUFDakQ7QUFFQSxJQUFNLFlBQVksQ0FBQyxLQUFLLFNBQVMsV0FBVyxZQUFZLGVBQWUsZUFBZTtBQUNwRixRQUFNLGFBQWEscUJBQXFCO0FBRXhDLFVBQVEsSUFBSSxxQkFBcUIsUUFBUSxvQkFBb0IsWUFBWSxhQUFhLFlBQVksSUFBSSxHQUFHLEtBQUssT0FBTztBQUN2SDtBQUVBLElBQU8sa0JBQVEsQ0FBQyxTQUFTO0FBQ3ZCLFFBQU0sV0FBVyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsTUFBTTtBQUNuRCxRQUFNLFVBQVUsR0FBRyxRQUFRLElBQUksSUFBSTtBQUNuQyxRQUFNLFlBQVksR0FBRyxXQUFXLE9BQU8sSUFBSSxVQUFVO0FBRXJELFFBQU0sWUFBWSxPQUFPLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVuRCxNQUFJLFVBQVUsT0FBTztBQUNuQixjQUFVLFFBQVEsaUdBQXFDO0FBQ3ZELGNBQVUsUUFBUSxtSUFBeUM7QUFDM0QsY0FBVSxRQUFRLCtHQUFtRDtBQUFBLEVBQ3ZFO0FBQ0Y7OztBRGxDcUwsSUFBTSwyQ0FBMkM7QUFXdE8sSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSxxQkFBcUI7QUFHM0IsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsa0JBQVEsSUFBSTtBQUNaLFNBQVE7QUFBQSxJQUNOLE1BQU0sUUFBUSxJQUFJLGFBQWEsZUFBZSxJQUFJLFFBQVEsSUFBSSxlQUFlLE1BQU07QUFBQSxJQUNuRixTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixhQUFhO0FBQUEsUUFDWCxTQUFTLENBQUMsZUFBZSxnQkFBZ0IsWUFBWSxXQUFXO0FBQUEsTUFDbEUsQ0FBQztBQUFBLE1BQ0QsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixRQUFRO0FBQUE7QUFBQSxVQUVOLGlCQUFpQixNQUFNO0FBQ3JCLGtCQUFNLFFBQVEsbUJBQW1CLEtBQUssSUFBSTtBQUMxQyxrQkFBTSxjQUFjLFFBQVEsTUFBTSxDQUFDLElBQUk7QUFFdkMsbUJBQ0UsY0FDQSxLQUFLLE1BQU0sWUFBWSxNQUFNLEVBQUUsUUFBUSxvQkFBb0IsRUFBRTtBQUFBLFVBRWpFO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
