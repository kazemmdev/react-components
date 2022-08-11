import { Box, Card, CardContent } from "@mui/material";

const ComponentOne = () => {
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
      </CardContent>
    </Card>
  );
};

export default ComponentOne;
