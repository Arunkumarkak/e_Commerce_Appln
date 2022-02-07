import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import useProductList from "./useProductList";
import {
  AppBar,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogContent,
  Divider,
  InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";

const useStyles = makeStyles(() => ({
  mainContainer: {
    height: window.innerHeight,
    background: "#ffffff",
    width: "100%",
    zindex: "1",
    top: "0"
  },
  searchBox: {
    backgroundColor: "#ffffff"
  },
  width10: {
    width: "10%"
  },
  width100: {
    width: "100%"
  },
  padding20: {
    padding: "20px"
  },
  gridCard: {
    maxWidth: 280,
    border: "1px solid #CCC",
    borderRadius: "10px",
    marginBottom: "5%",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
    }
  },
  mediaImg: {
    height: 150
  },
  titlePadding2: {
    padding: "2%"
  },
  searchTextfield: {
    borderRadius: "15px",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2)",
    width: "105%",
    marginTop: "3%"
  },
  btnText: {
    color: "#ffffff",
    fontSize: "12px"
  },
  bgColor: {
    backgroundColor: "#1769aa"
  },
  visibleIcon: {
    marginRight: "1px",
    fontSize: "14px"
  },
  textAlign: {
    textAlign: "center"
  },
  gridPadding: {
    padding: "10px"
  },
  viewCard: {
    display: "flex",
    border: "1px solid #ccc",
    borderRadius: "20px",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2)",
    margin: "5%",
    width: "50%"
  },
  viewContainer: {
    padding: "2px"
  },
  pB2: {
    padding: "3%"
  },
  labelText: {
    color: "#000000"
  },
  buttonMargin: {
    margin: "5%"
  },
  dialogMsg: {
    color: "#006198",
    textAlign: "center",
    marginTop: "5px",
    fontSize: "large"
  },
  dialogBtn: {
    backgroundColor: "#006198 t",
    color: "#ffffff",
    marginLeft: "30%",
    marginTop: "2%"
  }
}));

const ProductList = () => {
  const {
    showMobile,
    showLaptop,
    showHeadPhones,
    formIndex,
    viewDetails,
    showModal,
    searchMobile,
    searchLaptop,
    searchHeadphones,
    handleSearchMobile,
    handleSearchHeadphones,
    handleSearchLaptop,
    handleViewDetails,
    handleBack,
    handleBuy,
    handleSuccess
  } = useProductList();
  const classes = useStyles();
  return (
    <Grid>
      <Grid className={classes.mainContainer}>
        <Box xs={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Grid item xs={12} sm={10}>
                <Typography color="inherit">StorePlus</Typography>
              </Grid>
              <Typography className={classes.width10} color="inherit">
                User
              </Typography>
              <ShoppingCartIcon />
              <Typography className={classes.width10} color="inherit">
                Cart
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <>
          {formIndex === 0 && (
            <Grid>
              {/* Mobiles Section */}
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Typography variant="h5" className={classes.titlePadding2}>
                    Mobiles
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Grid className={classes.width100}>
                    <TextField
                      variant="outlined"
                      placeholder="Search for mobiles"
                      id="search"
                      value={searchMobile}
                      onFocus={(event) => {
                        event.target.setAttribute("autocomplete", "off");
                      }}
                      onChange={handleSearchMobile}
                      InputProps={{
                        className: classes.searchTextfield,
                        endAdornment: (
                          <InputAdornment>
                            <SearchIcon className={classes.searchIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.padding20}>
                {showMobile.mobileList.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.id}>
                    <Grid className={classes.gridCard}>
                      <CardActionArea>
                        <CardMedia
                          xs={12}
                          sm={6}
                          component="img"
                          src={item.image}
                          className={classes.mediaImg}
                        />
                        <CardContent>
                          <Typography className={classes.textAlign}>
                            {item.name} {item.price}
                          </Typography>
                          <Grid
                            container
                            spacing={2}
                            className={classes.gridPadding}
                          >
                            <Grid item container justifyContent={"center"}>
                              <Grid>
                                <Button
                                  variant="contained"
                                  onClick={() =>
                                    handleViewDetails(
                                      item.name,
                                      item.type,
                                      item.id
                                    )
                                  }
                                >
                                  <VisibilityIcon
                                    className={classes.visibleIcon}
                                  />
                                  View Details
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              {/* Laptop Section */}
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Typography variant="h5" className={classes.titlePadding2}>
                    Laptop
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Grid className={classes.width100}>
                    <TextField
                      variant="outlined"
                      placeholder="Search for laptop"
                      id="search"
                      value={searchLaptop}
                      onFocus={(event) => {
                        event.target.setAttribute("autocomplete", "off");
                      }}
                      onChange={handleSearchLaptop}
                      classes={{
                        root: classes.searchBox
                      }}
                      InputProps={{
                        className: classes.searchTextfield,
                        endAdornment: (
                          <InputAdornment>
                            <SearchIcon className={classes.searchIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.padding20}>
                {showLaptop.laptopList.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.id}>
                    <Grid className={classes.gridCard}>
                      <CardActionArea>
                        <CardMedia
                          xs={12}
                          sm={6}
                          component="img"
                          src={item.image}
                          className={classes.mediaImg}
                        />
                        <CardContent>
                          <Typography className={classes.textAlign}>
                            {item.name} {item.price}
                          </Typography>
                          <Grid
                            container
                            spacing={2}
                            className={classes.gridPadding}
                          >
                            <Grid item container justifyContent={"center"}>
                              <Grid>
                                <Button
                                  variant="contained"
                                  onClick={() =>
                                    handleViewDetails(
                                      item.name,
                                      item.type,
                                      item.id
                                    )
                                  }
                                >
                                  <VisibilityIcon
                                    className={classes.visibleIcon}
                                  />
                                  View Details
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
              {/* HeadPhone Section */}
              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Typography variant="h5" className={classes.titlePadding2}>
                    HeadPhones
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Grid className={classes.width100}>
                    <TextField
                      variant="outlined"
                      placeholder="Search for headphones"
                      id="search"
                      value={searchHeadphones}
                      onFocus={(event) => {
                        event.target.setAttribute("autocomplete", "off");
                      }}
                      onChange={handleSearchHeadphones}
                      classes={{
                        root: classes.searchBox
                      }}
                      InputProps={{
                        className: classes.searchTextfield,
                        endAdornment: (
                          <InputAdornment>
                            <SearchIcon className={classes.searchIcon} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} className={classes.padding20}>
                {showHeadPhones.headphonesList.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={item.id}>
                    <Grid className={classes.gridCard}>
                      <CardActionArea>
                        <CardMedia
                          xs={12}
                          sm={6}
                          component="img"
                          src={item.image}
                          className={classes.mediaImg}
                        />
                        <CardContent>
                          <Typography className={classes.textAlign}>
                            {item.name} {item.price}
                          </Typography>
                          <Grid
                            container
                            spacing={2}
                            className={classes.gridPadding}
                          >
                            <Grid item container justifyContent={"center"}>
                              <Grid>
                                <Button
                                  variant="contained"
                                  onClick={() =>
                                    handleViewDetails(
                                      item.name,
                                      item.type,
                                      item.id
                                    )
                                  }
                                >
                                  <VisibilityIcon
                                    className={classes.visibleIcon}
                                  />
                                  View Details
                                </Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
          {/* Product Details */}
          {formIndex === 1 && (
            <Grid className={classes.viewCard}>
              {viewDetails.productDetails.map((item) => (
                <Container className={classes.viewContainer}>
                  <Grid
                    container
                    spacing={3}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={4}>
                      <Grid>
                        <CardMedia component="img" src={item.image} />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs spacing={2}>
                        <Grid item xs>
                          <Grid container>
                            <Grid item xs={12} sm={10}>
                              <Grid container className={classes.pB2}>
                                <Grid item xs={12} sm={4}>
                                  <Typography className={classes.labelText}>
                                    Modal Name:{" "}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                  <Typography>{item.name}</Typography>
                                </Grid>
                              </Grid>
                              {item.type !== "headphones" && (
                                <Grid container className={classes.pB2}>
                                  <Grid item xs={12} sm={4}>
                                    <Typography className={classes.labelText}>
                                      Display :{" "}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12} sm={8}>
                                    <Typography>{item.screen}</Typography>
                                  </Grid>
                                </Grid>
                              )}
                              {item.type === "laptop" && (
                                <Grid container className={classes.pB2}>
                                  <Grid item xs={12} sm={4}>
                                    <Typography className={classes.labelText}>
                                      Procesor :{" "}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12} sm={8}>
                                    <Typography>{item.processor}</Typography>
                                  </Grid>
                                </Grid>
                              )}
                              {item.type === "laptop" && (
                                <Grid container className={classes.pB2}>
                                  <Grid item xs={12} sm={4}>
                                    <Typography className={classes.labelText}>
                                      Operating System :{" "}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12} sm={8}>
                                    <Typography>{item.os}</Typography>
                                  </Grid>
                                </Grid>
                              )}
                              {item.type === "laptop" && (
                                <Grid container className={classes.pB2}>
                                  <Grid item xs={12} sm={4}>
                                    <Typography className={classes.labelText}>
                                      Storage :{" "}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12} sm={8}>
                                    <Typography>
                                      {item.harddisk} {item.ram}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              )}
                              {item.type === "mobile" && (
                                <Grid container className={classes.pB2}>
                                  <Grid item xs={12} sm={4}>
                                    <Typography className={classes.labelText}>
                                      Storage :{" "}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12} sm={8}>
                                    <Typography>
                                      {item.ram} {item.rom}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              )}
                              {item.type === "mobile" && (
                                <Grid container className={classes.pB2}>
                                  <Grid item xs={12} sm={4}>
                                    <Typography className={classes.labelText}>
                                      Camera :{" "}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12} sm={8}>
                                    <Typography>{item.camera}</Typography>
                                  </Grid>
                                </Grid>
                              )}
                              {item.type === "headphones" && (
                                <Grid container className={classes.pB2}>
                                  <Grid item xs={12} sm={4}>
                                    <Typography className={classes.labelText}>
                                      Battery :{" "}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12} sm={8}>
                                    <Typography>{item.battery}</Typography>
                                  </Grid>
                                </Grid>
                              )}
                              <Grid container className={classes.pB2}>
                                <Grid item xs={12} sm={4}>
                                  <Typography className={classes.labelText}>
                                    Price :{" "}
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                  <Typography className={classes.subLabel}>
                                    {item.price}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid container spacing={2}>
                                <Grid className={classes.buttonMargin}>
                                  <Button
                                    onClick={handleBuy}
                                    variant="contained"
                                  >
                                    Buy Now
                                  </Button>
                                </Grid>
                                <Grid className={classes.buttonMargin}>
                                  <Button onClick={handleBack}>Back</Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              ))}
            </Grid>
          )}
        </>
        {/* Dialog Messaage popup */}
        <Dialog maxWidth={"md"} modal={false} open={showModal.open}>
          <DialogContent className={classes.pB2}>
            <Typography varaint="h6" className={classes.dialogMsg}>
              {showModal.message}
            </Typography>
            <Divider />
            <Grid
              item
              container
              justifyContent={"center"}
              className={classes.pB2}
            >
              <Button
                variant="contained"
                className={classes.dialogBtn}
                onClick={handleSuccess}
              >
                OK
              </Button>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </Grid>
  );
};
export default ProductList;
