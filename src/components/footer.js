import React from "react";

const style = {
  ul: {
    "text-align": "center",
  },
  li: {
    display: "inline",
    margin: "2px",
  },
  footer: {
    width: "100%",
    position: "fixed",
    bottom: "15px",
    margin: "auto",
    height: "20px",
  },
  a: {
    color: "white",
  },
  table: {
    marginLeft: "auto",
  },
};

function Footer() {
  return (
    <footer className="footer" style={style.footer}>
      <section id="contactMe">
        <table style={style.table}>
          <tr>
            <td>
              <ul style={style.ul}>
                <li style={style.li}>
                  <a href="tel:7209386873" alt="phoneNumber" style={style.a}>
                    Phone
                  </a>
                </li>
                <li style={style.li}>
                  <a
                    href="https://www.linkedin.com/in/peter-bishop-46a51597/"
                    alt="LinkedIn"
                    style={style.a}
                  >
                    LinkedIn
                  </a>
                </li>
                <li style={style.li}>
                  <a
                    href="https://github.com/Pierre81385"
                    alt="GitHub"
                    style={style.a}
                  >
                    GitHub
                  </a>
                </li>
                <li style={style.li}>
                  <a
                    href="https://www.instagram.com/pjb.den/"
                    alt="Instagram"
                    style={style.a}
                  >
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
