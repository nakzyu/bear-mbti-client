export const copyLinkToClipBoard = (): void => {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = window.location.href;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};
