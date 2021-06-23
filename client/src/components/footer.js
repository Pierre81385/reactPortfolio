import React from "react";

const style = {
  ul: {
    "text-align": "center",
  },
  li: {
    display: "inline",
    margin: "2px",
  },
};

function Footer() {
  return (
    <footer className="footer">
      <section id="contactMe">
        <table>
          <tr>
            <td>
              <ul style={style.ul}>
                <li style={style.li}>
                  <a href="tel:7209386873" alt="phoneNumber">
                    Phone
                  </a>
                </li>
                <li style={style.li}>
                  <a
                    href="https://www.linkedin.com/in/peter-bishop-46a51597/"
                    alt="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
                <li style={style.li}>
                  <a href="https://github.com/Pierre81385" alt="GitHub">
                    GitHub
                  </a>
                </li>
                <li style={style.li}>
                  <a href="https://www.instagram.com/pjb.den/" alt="Instagram">
                    Instagram
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </section>
    </footer>
  );
}

export default Footer;
