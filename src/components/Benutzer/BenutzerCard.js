import React, { Component } from "react";
import styles from "./BenutzerCard.module.css";

const data = [
  {
    benutzer: "1000-1014",
    anrede: "Herr",
    nachname: "Benai",
    vorname: "Raschid",
    password: "12345",
    mail: "benai@example.de",
    anschrift: "Firma QFS GmbH",
    funktion: "Prufer",
  },
  {
    benutzer: "1000-1015",
    anrede: "Herr",
    nachname: "Benai 2",
    vorname: "Raschid",
    password: "12345",
    mail: "benai@example.de",
    anschrift: "Firma QFS GmbH",
    funktion: "Prufer",
  },
];

export class BenutzerCard extends Component {
  state = {
    selected: null,
    items: data,
    options: [
      {
        key: "anrede",
        isOpen: false,
        values: ["Herr", "Frau"],
      },
      {
        key: "funktion",
        isOpen: false,
        values: ["Prufer"],
      },
    ],
  };

  render() {
    const { selected, items, options } = this.state;

    const toggleOption = (name) => {
      const { options } = this.state;
      const index = options.findIndex((item) => item.key === name);
      options[index].isOpen = !options[index].isOpen;
      this.setState({ options });
    };

    const setOptionValue = (name, select) => {
      const { selected } = this.state;
      if (selected && selected[name]) selected[name] = select;
      this.setState({ selected });
      toggleOption(name);
    };

    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.addButton}>
            <img src={require("../../assets/plus-small.svg").default} alt="plus" />
          </div>
          <div className="mr-6">Benutzer</div>
          <div className={styles.optionsWrapper}>
            <button
              type="button"
              className={styles.optionsInput}
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              {selected?.nachname}
              <span className={styles.optionsInputSvg}>
                <img src={require("../../assets/menu.svg").default} />
              </span>
            </button>
            <ul className={styles.optionsMenu + (this.state.isOpen ? " block" : " hidden")}>
              {items.map((item) => (
                <li
                  key={item.benutzer}
                  className={styles.optionsItem}
                  onClick={() =>
                    this.setState({
                      selected: items.find((x) => x.benutzer === item.benutzer),
                      isOpen: false,
                    })
                  }
                >
                  {item.nachname}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.inputs}>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Benutzer</div>
            <div>{selected && selected.benutzer}</div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Anrede</div>
            <div className={styles.optionsWrapper}>
              <button
                type="button"
                className={styles.optionsInput}
                onClick={() => toggleOption("anrede")}
              >
                {selected?.anrede}
                <span className={styles.optionsInputSvg}>
                  <img src={require("../../assets/menu.svg").default} />
                </span>
              </button>
              <ul
                className={
                  styles.optionsMenu +
                  (options.find((item) => item.key === "anrede").isOpen ? " block" : " hidden")
                }
              >
                {options
                  .find((item) => item.key === "anrede")
                  .values.map((item) => (
                    <li
                      key={item}
                      className={styles.optionsItem}
                      onClick={() => setOptionValue("anrede", item)}
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Nachname</div>
            <input
              type="string"
              className={styles.inputField}
              placeholder="Nachname"
              value={selected?.nachname || ""}
              onChange={(e) =>
                this.setState({ selected: { ...selected, nachname: e.target.value } })
              }
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Vorname</div>
            <input
              type="string"
              className={styles.inputField}
              placeholder="Vorname"
              value={selected?.vorname || ""}
              onChange={(e) =>
                this.setState({ selected: { ...selected, vorname: e.target.value } })
              }
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Mail</div>
            <input
              type="string"
              className={styles.inputField}
              placeholder="Mail"
              value={selected?.mail || ""}
              onChange={(e) => this.setState({ selected: { ...selected, mail: e.target.value } })}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Anschrift</div>
            <input
              type="string"
              className={styles.inputField}
              placeholder="Anschrift"
              value={selected?.anschrift || ""}
              onChange={(e) =>
                this.setState({ selected: { ...selected, anschrift: e.target.value } })
              }
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Funktion</div>
            <div className={styles.optionsWrapper}>
              <button
                type="button"
                className={styles.optionsInput}
                onClick={() => toggleOption("funktion")}
              >
                {selected?.funktion}
                <span className={styles.optionsInputSvg}>
                  <img src={require("../../assets/menu.svg").default} />
                </span>
              </button>
              <ul
                className={
                  styles.optionsMenu +
                  (options.find((item) => item.key === "funktion").isOpen ? " block" : " hidden")
                }
              >
                {options
                  .find((item) => item.key === "funktion")
                  .values.map((item) => (
                    <li
                      key={item}
                      className={styles.optionsItem}
                      onClick={() => setOptionValue("funktion", item)}
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.buttonError}>Läschen</button>
          <button className={styles.buttonInfo}>PW Reset</button>
          <button className={styles.buttonSuccess}>Speichern</button>
        </div>
      </div>
    );
  }
}

export default BenutzerCard;
