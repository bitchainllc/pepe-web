import Link from "next/link";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaWindowClose } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
const TopNav = ({ style, rtl, closed, setClosed }) => {
  const contract = "0X0000000000000000000000";
  const [value, setValue] = useState(contract);
  const [copied, setCopied] = useState(false);
  const otherCopy = () => setCopied(true);
  return (
    <div style={{ marginBottom: 0 }} id="top-nav-1">
      {closed && (
        <div className={`top-navbar style-${style}`}>
          <div className="d-flex justify-content-around valign ">
            {" "}
            <span></span>
            <div className="d-block d-md-flex valign">
              {" "}
              <p className="me-md-2">
                {" "}
                Contract: has not been deployed yet.
              </p>{" "}
              <CopyToClipboard onCopy={otherCopy} text={value}>
                <button
                  className=" bg-gray btn-sm shadow-none bold-text"
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  {copied ? "COPIED " : "COPY"}
                  {copied ? (
                    <MdContentCopy className=" my-auto" />
                  ) : (
                    <IoMdCopy className="  my-auto" />
                  )}
                </button>
              </CopyToClipboard>
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => setClosed(false)}>
              <FaWindowClose color="white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNav;
