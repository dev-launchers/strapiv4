(self.webpackChunkdevlaunchers_strapiv4=self.webpackChunkdevlaunchers_strapiv4||[]).push([[953],{96477:(f,w,u)=>{(function(a){a(u(4631))})(function(a){"use strict";function o(s,e){if(!window.JSHINT)return window.console&&window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run."),[];e.indent||(e.indent=1),JSHINT(s,e,e.globals);var i=JSHINT.data().errors,n=[];return i&&d(i,n),n}a.registerHelper("lint","javascript",o);function d(s,e){for(var i=0;i<s.length;i++){var n=s[i];if(n){if(n.line<=0){window.console&&window.console.warn("Cannot display JSHint error (invalid line "+n.line+")",n);continue}var t=n.character-1,c=t+1;if(n.evidence){var l=n.evidence.substring(t).search(/.\b/);l>-1&&(c+=l)}var r={message:n.reason,severity:n.code&&n.code.startsWith("W")?"warning":"error",from:a.Pos(n.line-1,t),to:a.Pos(n.line-1,c)};e.push(r)}}}})}}]);
