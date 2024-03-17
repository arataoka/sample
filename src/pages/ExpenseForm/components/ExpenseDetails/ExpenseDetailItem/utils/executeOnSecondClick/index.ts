// 2回目のクリック時のみ、引数に取った関数を実行する
export const executeOnSecondClick = (callback: () => void) => {
  let firstClick = true;
  const listener = () => {
    if (!firstClick) {
      callback();
      // clean up処理
      window.removeEventListener("click", listener);
    } else {
      firstClick = false;
    }
  };
  window.addEventListener("click", listener);
};
