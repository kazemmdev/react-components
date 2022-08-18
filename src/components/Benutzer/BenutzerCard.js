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
];

export class BenutzerCard extends Component {
  state = {
    selected: [],
    items: data,
  };

  render() {
    const { selected, items } = this.state;

    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.addButton}>
            <img src={require("../../assets/plus-small.svg").default} alt="plus" />
          </div>
          <div className="mr-6">Benutzer</div>
          <Options
            items={items.map((item) => item.nachname)}
            selectOption={(e) => this.setState({ selected: items.find((item) => item.nachname === e) })}
          />
        </div>
        <div className={styles.inputs}>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Benutzer</div>
            <div>{selected && selected.benutzer}</div>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Anrede</div>
            <Options
              items={["Herr", "Frau"]}
              value={selected?.anrede || ""}
              selectOption={(e) => this.setState({ selected: { ...selected, anrede: e } })}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Nachname</div>
            <input
              type="string"
              className={styles.inputField}
              placeholder="Nachname"
              value={selected?.nachname || ""}
              onChange={(e) => this.setState({ selected: { ...selected, nachname: e.target.value } })}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Vorname</div>
            <input
              type="string"
              className={styles.inputField}
              placeholder="Vorname"
              value={selected?.vorname || ""}
              onChange={(e) => this.setState({ selected: { ...selected, vorname: e.target.value } })}
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
              onChange={(e) => this.setState({ selected: { ...selected, anschrift: e.target.value } })}
            />
          </div>
          <div className={styles.inputRow}>
            <div className={styles.inputName}>Funktion</div>
            <Options
              items={["Prufer"]}
              value={selected?.funktion || ""}
              selectOption={(e) => this.setState({ selected: { ...selected, funktion: e } })}
            />
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

export class Options extends Component {
  state = {
    isOpen: false,
    selected: "",
  };

  render() {
    const handleSelectOption = (item) => {
      this.props.selectOption(item);
      this.setState({ isOpen: false, selected: item });
    };
    return (
      <div className={styles.optionsWrapper}>
        <button
          type="button"
          className={styles.optionsInput}
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          {this.state.selected || this.props.value}
          <span className={styles.optionsInputSvg}>
            <img src={require("../../assets/menu.svg").default} />
          </span>
        </button>
        <ul className={styles.optionsMenu + (this.state.isOpen ? " block" : " hidden")}>
          {this.props.items.map((item) => (
            <li key={item} className={styles.optionsItem} onClick={() => handleSelectOption(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BenutzerCard;
