import '../static/CopyButton.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
function CopyButton() {
    const ANIMATE_TIMEOUT = 3000 + 200;
    const animate = () => {
        const button = document.getElementById("button");
        if (!button.classList.contains("animate")) {
            button.classList.add("animate");
            setTimeout(() => {
              button.classList.remove("animate");
            }, ANIMATE_TIMEOUT);
          }
    }
    return(
    // <div class="wrapper">
    <CopyToClipboard text={window.location.href}>
    <button class="button" type="button" id="button" title="Copy link" onClick={animate}>
        <div class="content">
        <div class="copy">
            <svg
            width="13"
            height="13"
            viewbox="0 0 13 13"
            fill="none"
            class="icon"
            aria-hidden="true"
            focusable="false"
            >
            <path
                d="M6.0252 3.43935C5.04889 4.41567 5.04889 5.99858 6.0252 6.97489C6.28067 7.23035 6.57766 7.41897 6.89445 7.54074C6.94651 7.87999 6.89573 8.23198 6.7421 8.54639C6.22117 8.38293 5.7309 8.0948 5.3181 7.68199C3.95126 6.31516 3.95126 4.09908 5.3181 2.73225L6.73231 1.31803C8.09914 -0.0488011 10.3152 -0.0488011 11.6821 1.31803C13.0489 2.68487 13.0489 4.90095 11.6821 6.26778L10.2678 7.68199C10.0307 7.91913 9.768 8.11513 9.48861 8.26998C9.53203 7.87284 9.52024 7.4708 9.45324 7.07631C9.48982 7.04376 9.52567 7.00996 9.56074 6.97489L10.9749 5.56067C11.9513 4.58436 11.9513 3.00145 10.9749 2.02514C9.99864 1.04883 8.41573 1.04883 7.43942 2.02514L6.0252 3.43935ZM2.73939 5.32512C2.9765 5.08801 3.23916 4.89203 3.51852 4.73719C3.47511 5.13433 3.48691 5.53637 3.55392 5.93087C3.51736 5.96339 3.48154 5.99718 3.4465 6.03222L2.03228 7.44644C1.05597 8.42275 1.05597 10.0057 2.03228 10.982C3.00859 11.9583 4.59151 11.9583 5.56782 10.982L6.98203 9.56776C7.95834 8.59145 7.95834 7.00853 6.98203 6.03222C6.72654 5.77674 6.42951 5.58811 6.11268 5.46633C6.06063 5.12708 6.11141 4.7751 6.26503 4.46069C6.78601 4.62415 7.27631 4.91229 7.68914 5.32512C9.05597 6.69195 9.05597 8.90803 7.68914 10.2749L6.27492 11.6891C4.90809 13.0559 2.69201 13.0559 1.32518 11.6891C-0.0416599 10.3222 -0.04166 8.10617 1.32518 6.73933L2.73939 5.32512Z"
                fill="currentColor"
            />
            </svg>
            <div>
            Copy Link
            </div>
        </div>
        <div class="copied">Copied</div>
        </div>
    </button>
    </CopyToClipboard>
    // </div>
    );
}
export default CopyButton