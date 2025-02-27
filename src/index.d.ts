declare module '@alpacamybags118/yt-dlp-exec' {
  import { ExecaChildProcess } from "execa";

  /**
 * createYtDlpAsProcess will create a child process that invokes yt-dlp with the provided arguments and return that process.
 * @param {string} mediaUrl The URL of the media you wish to download with ytp
 * @param {unknown} options An object that represents the command line options to invoke yt-dlp with. Uses dargs (https://github.com/sindresorhus/dargs) for object format. See https://github.com/yt-dlp/yt-dlp#usage-and-options for all options
 * @returns execa.ExecaChildProcess
 */
  export default function createYtDlpAsProcess(mediaUrl: string, options: unknown): ExecaChildProcess
}