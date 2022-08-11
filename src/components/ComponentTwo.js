import { Card, CardContent, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/system";

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

const ComponentTwo = () => {
  return (
    <Card sx={{ background: "#f3f3f3", boxShadow: "0 0 6px 4px #ddd", borderRadius: 4 }}>
      <CardContent>
        <Box
          sx={{ display: "flex", paddingBottom: 1, marginBottom: 1, borderBottom: "2px solid #ddd", fontWeight: 600 }}
        >
          <Box sx={{ width: 200 }}>Rechte</Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", flex: 1, paddingRight: 2 }}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </Box>
        </Box>
        {/* <Divider sx={{ height: "2px", marginBottom: 2, background: "#ddd" }} /> */}
        {data &&
          data.map((item) => (
            <Box key={item.name} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Box sx={{ width: 200 }}>{item.name}</Box>
              <RadioGroup row>
                <FormControlLabel value={1} control={<Radio size="small" color="success" />} />
                <FormControlLabel value={2} control={<Radio size="small" color="success" />} />
                <FormControlLabel value={3} control={<Radio size="small" color="success" />} sx={{ marginRight: 0 }} />
              </RadioGroup>
            </Box>
          ))}
      </CardContent>
    </Card>
  );
};

export default ComponentTwo;
