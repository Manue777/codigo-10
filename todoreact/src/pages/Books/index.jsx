import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    TextField,
    Button,
  } from "@mui/material";
  
  const Books = () => {
    return (
      <Container maxWidth="sm">
        <Box mt={3}>
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={9}>
                  <TextField size="small" fullWidth label="Buscar libros" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Button variant="contained" color="warning">
                    Buscar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
  };
  
  export default Books;
  