"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownPathToPosix = exports.isPathEquivalent = exports.isFilePathInDirname = void 0;
const path_1 = __importDefault(require("path"));
/**
 * Note: in versions of the transfer engine <=4.9.0, exports were generated with windows paths
 * on Windows systems, and posix paths on posix systems.
 *
 * We now store all paths as posix, but need to leave a separator conversion for legacy purposes, and to
 * support manually-created tar files coming from Windows systems (ie, if a user creates a
 * backup file with a windows tar tool rather than using the `export` command)
 *
 * Because of this, export/import files may never contain files with a forward slash in the name, even escaped
 *
 * */
/**
 * Check if the directory of a given filePath (which can be either posix or win32) resolves to the same as the given posix-format path posixDirName
 * We must be able to assume the first argument is a path to a directory and the second is a path to a file, otherwise path.dirname will interpret a path without any slashes as the filename
 *
 * @param {string} posixDirName A posix path pointing to a directory
 * @param {string} filePath an unknown filesystem path pointing to a file
 * @returns {boolean} is the file located in the given directory
 */
const isFilePathInDirname = (posixDirName, filePath) => {
    const normalizedDir = path_1.default.posix.dirname((0, exports.unknownPathToPosix)(filePath));
    return (0, exports.isPathEquivalent)(posixDirName, normalizedDir);
};
exports.isFilePathInDirname = isFilePathInDirname;
/**
 *  Check if two paths that can be either in posix or win32 format resolves to the same file
 *
 * @param {string} pathA a path that may be either win32 or posix
 * @param {string} pathB a path that may be either win32 or posix
 *
 * @returns {boolean} do paths point to the same place
 */
const isPathEquivalent = (pathA, pathB) => {
    // Check if paths appear to be win32 or posix, and if win32 convert to posix
    const normalizedPathA = path_1.default.posix.normalize((0, exports.unknownPathToPosix)(pathA));
    const normalizedPathB = path_1.default.posix.normalize((0, exports.unknownPathToPosix)(pathB));
    return !path_1.default.posix.relative(normalizedPathB, normalizedPathA).length;
};
exports.isPathEquivalent = isPathEquivalent;
/**
 *  Convert an unknown format path (win32 or posix) to a posix path
 *
 * @param {string} filePath a path that may be either win32 or posix
 *
 * @returns {string} a posix path
 */
const unknownPathToPosix = (filePath) => {
    // if it includes a forward slash, it must be posix already -- we will not support win32 with mixed path separators
    if (filePath.includes(path_1.default.posix.sep)) {
        return filePath;
    }
    return path_1.default.normalize(filePath).split(path_1.default.win32.sep).join(path_1.default.posix.sep);
};
exports.unknownPathToPosix = unknownPathToPosix;
//# sourceMappingURL=utils.js.map