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
    const handleOptionSelector = (value, name) => {
      const inputs = this.state.inputs.map((input) =>
        input.name === name ? (input.value = value) : (input.value = input.value)
      );

      this.setState(inputs);
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
            <RadioField name={item.name} onClick={handleOptionSelector} />
          </div>
        ))}
      </div>
    );
  }
}

const RadioField = ({ name, onClick }) => {
  const values = [0, 1, 2, 3];

  return (
    <div className={styles.inputRowOptions} onChange={(e) => onClick(e.target.value, name)}>
      {values.map((radio) => (
        <input key={radio} name={name} value={radio} type="radio" className={styles.inputRowOption} />
      ))}
    </div>
  );
};

export default BenutzerRechteCard;
