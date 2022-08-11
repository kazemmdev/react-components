import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";

const data = [
  {
    benutzer: "1000-1014",
    andrede: "Herr",
    nachname: "Benai",
    vorname: "Raschid",
    password: "12345",
    mail: "benai@example.de",
    anschrift: "Firma QFS GmbH",
    funktion: "Prufer",
  },
];

const ComponentOne = () => {
  const [selected, setSelected] = useState([]);

  return (
    <Card sx={{ background: "#f3f3f3", boxShadow: "0 0 6px 4px #ddd", borderRadius: 4, maxWidth: "360px" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: 1,
            marginBottom: 2,
            borderBottom: "2px solid #ddd",
            fontWeight: 600,
          }}
        >
          <IconButton color="success">
            <Add />
          </IconButton>
          <Box sx={{ width: 80 }}>Benutzer</Box>
          <FormControl variant="standard" sx={{ flex: 1, minWidth: 160, height: 30 }}>
            <Select
              displayEmpty
              sx={{ flex: 1, height: 30, fontSize: 14 }}
              onChange={(e) => setSelected(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data &&
                data.map((item) => (
                  <MenuItem key={item.benutzer} value={item}>
                    {item.andrede + " " + item.nachname + " " + item.vorname}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight={600} minWidth={120}>
              Benutzer
            </Typography>
            <Box>{selected && selected.benutzer}</Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight={600} minWidth={120}>
              Anrede
            </Typography>
            <FormControl variant="standard" sx={{ flex: 1, minWidth: 160 }}>
              <Select
                displayEmpty
                value={selected?.andrede ?? ""}
                onChange={(e) => setSelected({ ...selected, andrede: e.target.value })}
                sx={{ flex: 1, height: 30, fontSize: 14 }}
              >
                <MenuItem value="">
                  <em>Select an option</em>
                </MenuItem>
                <MenuItem value={"Herr"}>Herr</MenuItem>
                <MenuItem value={"Frau"}>Frau</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight={600} minWidth={120}>
              Nachname
            </Typography>
            <Input
              value={selected?.nachname}
              sx={{ flex: 1, minWidth: 160, height: 30, fontSize: 14 }}
              placeholder="Nachname"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight={600} minWidth={120}>
              Vorname
            </Typography>
            <Input
              value={selected?.vorname}
              sx={{ flex: 1, minWidth: 160, height: 30, fontSize: 14 }}
              placeholder="Vorname"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight={600} minWidth={120}>
              Mail
            </Typography>
            <Input
              value={selected?.mail}
              sx={{ flex: 1, minWidth: 160, height: 30, fontSize: 14 }}
              placeholder="Mail"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight={600} minWidth={120}>
              Anschrift
            </Typography>
            <Input
              value={selected.anschrift}
              sx={{ flex: 1, minWidth: 160, height: 30, fontSize: 14 }}
              placeholder="Anschrift"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontWeight={600} minWidth={120}>
              Funktion
            </Typography>
            <FormControl variant="standard" sx={{ flex: 1, minWidth: 160 }}>
              <Select
                displayEmpty
                value={selected?.funktion ?? ""}
                onChange={(e) => setSelected({ ...selected, funktion: e.target.value })}
                sx={{ flex: 1, height: 30, fontSize: 14 }}
              >
                <MenuItem value="">
                  <em>Select an option</em>
                </MenuItem>
                <MenuItem value={"Prufer"}>Prufer</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ marginTop: 4, display: "flex", gap: 2 }}>
          <Button color="error" variant="contained" sx={{ fontSize: 14, textTransform: "unset", borderRadius: 10 }}>
            Läschen
          </Button>
          <Button color="info" variant="contained" sx={{ fontSize: 14, textTransform: "unset", borderRadius: 10 }}>
            PW Reset
          </Button>
          <Button color="success" variant="contained" sx={{ fontSize: 14, textTransform: "unset", borderRadius: 10 }}>
            Speichern
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ComponentOne;
