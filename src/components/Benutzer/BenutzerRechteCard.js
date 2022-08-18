import React, { Component } from "react";
import styles from "./BenutzerRechteCard.module.css";

const data = [
  {
    name: "Administer",
    value: null,
  },
  {
    name: "Werte",
    value: null,
  },
  {
    name: "PRIO",
    value: null,
  },
  {
    name: "Reporte",
    value: null,
  },
  {
    name: "mobiles-CP2",
    value: null,
  },
  {
    name: "Prufergebnisse",
    value: null,
  },
  {
    name: "Besandsdaten",
    value: null,
  },
  {
    name: "Archiv",
    value: null,
  },
  {
    name: "Wartung",
    value: null,
  },
  {
    name: "Recherche",
    value: null,
  },
  {
    name: "Base-Katalog",
    value: null,
  },
  {
    name: "Pruf. Ertellen",
    value: null,
  },
  {
    name: "Steuerung",
    value: null,
  },
  {
    name: "PC-Prufung",
    value: null,
  },
  {
    name: "Reparaturen",
    value: null,
  },
  {
    name: "Benutzer",
    value: null,
  },
];

export class BenutzerRechteCard extends Component {
  state = {
    inputs: data,
  };

  render() {
    const optionValues = [0, 1, 2, 3];

    const handleOptionSelector = (value, name) => {
      const inputs = this.state.inputs;

      inputs.map((input) => {
        if (input.name === name) input.value = value;
      });

      this.setState({ inputs });
    };

    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderName}>Rechte</div>
          <div className={styles.cardHeaderOptions}>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
        {this.state.inputs.map((item) => (
          <div key={item.name} className={styles.inputRow}>
            <strong className={styles.inputRowName}>{item.name}</strong>
            <div className={styles.inputRowOptions} onChange={(e) => handleOptionSelector(e.target.value, item.name)}>
              {optionValues.map((radio) => (
                <input key={radio} name={item.name} value={radio} type="radio" className={styles.inputRowOption} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BenutzerRechteCard;
