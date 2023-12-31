import { useNavigate } from "react-router";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import Corpo from "../../core/assets/images/humanidades/corpo.png";
import Ailton from "../../core/assets/images/humanidades/ailton.png";
import Ailton2 from "../../core/assets/images/humanidades/ailton2.png";
import Producoes from "../../core/assets/images/humanidades/producoes.png";
import Representantes from "../../core/assets/images/humanidades/representantes.png";
import Movimento from "../../core/assets/images/humanidades/movimento.png";
import Carrossel from "../../core/components/Carrossel/Carrossel";

export default function Home() {
  const navigate = useNavigate();

  function handlebutton1() {
    scroll(0, 0);
    navigate("/ailtonKrenak");
  }

  function handlebutton2() {
    scroll(0, 0);
    navigate("/corpoHumanidade");
  }

  function handlebutton3() {
    scroll(0, 0);
    navigate("/corpoProtesto");
  }

  function handlebutton4() {
    scroll(0, 0);
    navigate("/figurasImportantes");
  }

  function handlebutton5() {
    scroll(0, 0);
    navigate("/visaoHumanidade");
  }

  function handlebutton6() {
    scroll(0, 0);
    navigate("/oQueFicou");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <Carrossel />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              maxWidth: 800,
              minHeight: 410,
              /* height: "450px", */ margin: "1rem",
              boxShadow: "5px 3px 6px 1px lightGray",
            }}
          >
            <CardMedia
              component="img"
              alt="ailton krenak"
              height="200"
              src={Ailton}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                variant="h5"
                component="div"
              >
                Quem é Ailton Krenak?
              </h4>
              <Typography>
                Ailton Alves Lacerda Krenak, mais conhecido como Ailton Krenak,
                é um pensador, ambientalista, filósofo, poeta e escritor
                brasileiro da etnia indígena crenaque.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handlebutton1}
                style={{ color: "#00695c", fontWeight: "bold" }}
                size="small"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              maxWidth: 800,
              minHeight: 410,
              /* height: "450px", */ margin: "1rem",
              boxShadow: "5px 3px 6px 1px lightGray",
            }}
          >
            <CardMedia
              component="img"
              alt="movimento indígena"
              height="200"
              src={Movimento}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                variant="h5"
                component="div"
              >
                O Corpo na Humanidade
              </h4>
              <Typography>
                O que é o corpo e como ele ocupa espaço na humanidade, com suas
                determinadas funções, ímpetos, representações e significados.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handlebutton2}
                style={{ color: "#00695c", fontWeight: "bold" }}
                size="small"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              maxWidth: 800,
              minHeight: 410,
              /* height: "450px", */ margin: "1rem",
              boxShadow: "5px 3px 6px 1px lightGray",
            }}
          >
            <CardMedia
              component="img"
              alt="ailton krenak"
              height="200"
              src={Corpo}
            />
            <CardContent>
              <h4
                style={{ color: "#078272", fontStyle: "bold" }}
                variant="h5"
                component="div"
              >
                Corpo: Ato de protesto
              </h4>
              <Typography>
                Os movimentos de pinturas e manifestações corporais como meio
                político de protesto e reivindicação e sua repercussão na
                política do Brasil.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handlebutton3}
                style={{ color: "#00695c", fontWeight: "bold" }}
                size="small"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              maxWidth: 800,
              minHeight: 410,
              /* height: "450px",  */ margin: "1rem",
              boxShadow: "5px 3px 6px 1px lightGray",
            }}
          >
            <CardMedia
              component="img"
              alt="figuras importantes"
              height="200"
              src={Representantes}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                variant="h5"
                component="div"
              >
                Figuras importantes do movimento
              </h4>
              <Typography>
                Figuras importantes e essenciais que estão se destacando e/ou se
                destacaram no movimento pela luta dos povos indígenas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handlebutton4}
                style={{ color: "#00695c", fontWeight: "bold" }}
                size="small"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              maxWidth: 800,
              minHeight: 410,
              /* height: "450px", */ margin: "1rem",
              boxShadow: "5px 3px 6px 1px lightGray",
            }}
          >
            <CardMedia
              component="img"
              alt="livros"
              height="200"
              src={Producoes}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                variant="h5"
                component="div"
              >
                Visão de Humanidade
              </h4>
              <Typography>
                A perspectiva de Krenak acerca da visão de humanidade. Destaque
                principal para o livro <i>Ideias para adiar o fim do mundo (2019).</i> 
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handlebutton5}
                style={{ color: "#00695c", fontWeight: "bold" }}
                size="small"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              maxWidth: 800,
              minHeight: 410,
              /* height: "450px", */ margin: "1rem",
              boxShadow: "5px 3px 6px 1px lightGray",
            }}
          >
            <CardMedia
              component="img"
              alt="ailton krenak"
              height="200"
              src={Ailton2}
            />
            <CardContent>
              <h4
                style={{ color: "#00695c", fontStyle: "bold" }}
                variant="h5"
                component="div"
              >
                O que ficou?
              </h4>
              <Typography>
                Conclusão do conhecimento obtido através na análise
                antropológica desenvolvida por Ailton Krenak e os desdobramentos
                da sua história.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={handlebutton6}
                style={{ color: "#00695c", fontWeight: "bold" }}
                size="small"
              >
                Saiba mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
