// import logo from './logo.svg';
import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Kolade",
            departments: []
        };
        this.openLoginPage = this.openLoginPage.bind(this);
        this.openRegPage = this.openRegPage.bind(this);
    }

    myz() {
        var formdata = new FormData();
        formdata.append("Name", "Human Anatomy");
        formdata.append("File", "");
        formdata.append("MediaType", "Image");
        formdata.append("DepartmentID", "1");
        formdata.append("UnitID", "1");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://nardlibrary.org/api/Resource/Add/", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    componentDidMount() {
        let that = this;
        // that.myz();
        function all_cats() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://nardlibrary.org/api/Department/GetAll", requestOptions)
                .then(response => response.json())
                .then((result) => {
                    if (result.status === "success") {
                        that.setState({departments: result.data});
                    }
                })
                .catch(error => console.log('error', error));
        }
        all_cats();

        function all_res() {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://nardlibrary.org/api/Resource/Get/6", requestOptions)
                .then(response => response.text)
                .then((result) => {
                    console.log(result);
                    // if (result.status === "success") {
                    //     that.setState({departments: result.data});
                    // }
                })
                .catch(error => console.log('error', error));
        }

        // all_res();

    }

    dos() {
        alert(this.state.name)
    }

    openLoginPage() {
        this.props.history.push('login/');
    }

    openRegPage() {
        this.props.history.push('register/');
    }

    render() {
        return (
            <div className="App">
                {/*<!--WRAPPER START-->*/}
                <div className="wrapper kode-home-page">

                    {/*<!--HEADER START-->*/}
                    <header>
                        {/*// <!--                <div class="top-strip">*/}
                        {/*//                     <div class="container">*/}
                        {/*//                         <div class="site-info">*/}
                        {/*//                             <ul>*/}
                        {/*//                                 <li><a href="mailto:Info@bookguide.com"><i class="fa fa-envelope-o"> </i>Info@bookguide.com</a></li>*/}
                        {/*//                                 <li><a href="/"><i class="fa fa-heart"> </i></a></li>*/}
                        {/*//                                 <li><a href="/"><i class="fa fa-shopping-cart"> </i></a></li>*/}
                        {/*//                                 <li><a id="search-box" href="/"><i class="fa fa-search"> </i></a></li>*/}
                        {/*//                             </ul>*/}
                        {/*//                         </div>*/}
                        {/*//                     </div>*/}
                        {/*//                 </div>-->*/}
                        {/*// <!--Search Overlay Box Starts -->*/}
                        <div id="kode_search_box" className="kode_search_box">
                            <form className="kode_search_box-form">
                                <input className="kode_search_box-input" type="search" placeholder="Search..."/>
                                <button className="kode_search_box-submit" type="submit">Search</button>
                            </form>
                            <span className="kode_search_box-close"></span>
                        </div>

                        {/*<!-- /kode_search_box -->*/}
                        <div className="overlay"></div>
                        <div className="logo-container">
                            <div className="container">

                                {/*<!--LOGO START-->*/}
                                <div className="logo">
                                    <a href="/"><img src="./images/logo.png" alt="" style={{height: "50px"}}/></a>
                                </div>

                                {/*<!--LOGO END-->*/}
                                <div className="kode-navigation">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/">About Us</a></li>
                                        <li className="last"><a href="/">Contact Us</a></li>
                                        <li><a href="/">Media <i className="fa fa-caret-down"> </i></a>
                                            <ul>
                                                <li><a href="/">Blog</a></li>
                                                <li><a href="/">Blog Full</a></li>
                                                <li><a href="/">Blog Detail</a></li>
                                            </ul>
                                        </li>

                                        {/*<!--                                <li class="last"><a href="authors/">Teams</a>*/}
                                        {/*<ul>*/}
                                        {/*<li><a href="authors/">Author</a></li>*/}
                                        {/*<li><a href="author-detail/">Author Detail</a></li>*/}
                                        {/*</ul>*/}
                                        {/*</li>-->*/}
                                        <li><a href="/">Categories <i className="fa fa-caret-down"> </i></a>
                                            <ul>
                                                {
                                                    this.state.departments.map((item) => (
                                                        <li key={item.id}><a href={"/" + item.id}>{item.name}</a></li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="btn btn-default"
                                                  onClick={() => {
                                                      this.openLoginPage();
                                                  }}
                                                  style={{
                                                      background: "rgb(239, 157, 73)",
                                                      color: "#fff",
                                                      height: "30px",
                                                      paddingTop: "8px",
                                                      borderRadius: "15px",
                                                      fontSize: "70%",
                                                      marginTop: '15px'
                                                  }}>LOGIN</span>
                                        </li>
                                        <li>
                                            <span className="btn btn-default"
                                                  onClick={() => {
                                                      this.openRegPage();
                                                  }}
                                                  style={{
                                                      background: "rgb(239, 157, 73)",
                                                      color: "#fff",
                                                      height: "30px",
                                                      paddingTop: "8px",
                                                      borderRadius: "15px",
                                                      fontSize: "70%",
                                                      marginTop: '15px'
                                                  }}>SIGN UP</span>
                                        </li>

                                    </ul>
                                </div>
                                <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                    <button className="dl-trigger">Open Menu</button>
                                    <ul className="dl-menu">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/">About Us</a></li>
                                        <li className="last"><a href="/">Contact Us</a></li>
                                        <li className="menu-item kode-parent-menu"><a href="/">Media</a>
                                            <ul className="dl-submenu">
                                                <li><a href="/">Blog</a></li>
                                                <li><a href="/">Blog Full</a></li>
                                                <li><a href="/">Blog Detail</a></li>
                                            </ul>
                                        </li>

                                        {/*<!--                                <li class="menu-item kode-parent-menu last"><a href="authors/">Teams</a>*/}
                                        {/*<ul class="dl-submenu">*/}
                                        {/*<li><a href="authors/">Author</a></li>*/}
                                        {/*<li><a href="author-detail/">Author Detail</a></li>*/}
                                        {/*</ul>*/}
                                        {/*</li>-->*/}
                                        <li className="menu-item kode-parent-menu last">
                                            <a href="/">Categories</a>
                                            <ul className="dl-submenu">
                                                {
                                                    this.state.departments.map((item) => (
                                                        <li key={item.id}><a href={"/" + item.id}>{item.name}</a></li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="btn btn-default"
                                                  onClick={() => {
                                                      this.openLoginPage();
                                                  }}
                                                  style={{
                                                      background: "rgb(239, 157, 73)",
                                                      color: "#fff",
                                                      height: "30px",
                                                      paddingTop: "8px",
                                                      borderRadius: "15px",
                                                      fontSize: "70%",
                                                      marginTop: '15px'
                                                  }}>LOGIN</span>
                                        </li>
                                        <li>
                                            <span className="btn btn-default"
                                                  onClick={() => {
                                                      this.openRegPage();
                                                  }}
                                                  style={{
                                                      background: "rgb(239, 157, 73)",
                                                      color: "#fff",
                                                      height: "30px",
                                                      paddingTop: "8px",
                                                      borderRadius: "15px",
                                                      fontSize: "70%",
                                                      marginTop: '15px'
                                                  }}>SIGN UP</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/*<!--HEADER END-->*/}

                    <div style={{minHeight: "700px", width: "100%", backgroundColor: "rgb(33,34,62)",}}>
                        <div className="row">
                            <div className="col-md-6" style={{height: "600px",}}>
                                <div style={{
                                    position: "absolute",
                                    top: "40%",
                                    left: "10%",
                                    width: "100%",
                                    textAlign: "center",
                                }}>
                                    <h2 style={{
                                        color: "#fff",
                                        marginBottom: "5px",
                                        fontFamily: "Roboto",
                                        fontSize: "300%",
                                    }}>Online</h2>
                                    <h2 style={{
                                        color: "#fff",
                                        marginBottom: "5px",
                                        fontFamily: "Roboto",
                                        fontSize: "300%",
                                    }}>Resource
                                        Library</h2>
                                    <span style={{color: "#fff", fontFamily: "Roboto", fontSize: "150%",}}>For Medical Practitioners in Nigeria</span><br/>
                                    <br/><br/>
                                    <div className="form-group" style={{width: "100%",}}>
                                        <table style={{width: "100%", borderWidth: "0px",}}>
                                            <tr>
                                                <td style={{width: "30%", verticalAlign: "top", borderWidth: "0px",}}>
                                                    <select className="form-control"
                                                            style={{
                                                                height: "50px",
                                                                borderRightWidth: "0px",
                                                                borderRadius: "5px 0 0 5px",
                                                            }}>
                                                        <option key="0" value="">Categories</option>
                                                        {
                                                            this.state.departments.map((item) => (
                                                                <option key={item.id}
                                                                        value={item.id}>{item.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </td>
                                                <td style={{width: "65%", verticalAlign: "top", borderWidth: "0px"}}>
                                                    <input type="text" placeholder="Search resources..."
                                                           className="form-control"
                                                           style={{
                                                               height: "50px",
                                                               borderRadius: "0px",
                                                               borderLeftWidth: "0px",
                                                               borderRightWidth: "0px"
                                                           }}/>
                                                </td>
                                                <td style={{width: "5%", verticalAlign: "top", borderWidth: "0px"}}>
                                                <span className="btn btn-default btn-block"
                                                      style={{
                                                          height: "50px",
                                                          paddingTop: "35%",
                                                          borderLeftWidth: "0px",
                                                          borderRadius: "0 5px 5px 0"
                                                      }}><i
                                                    className="fa fa-search"> </i></span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    style={{
                                        height: "600px",
                                        width: "100%",
                                        backgroundColor: "rgb(215,94,65)",
                                        borderRadius: "0 0 0 700px",
                                        paddingLeft: "10%",
                                        paddingBottom: "50px",
                                        paddingTop: '50px'
                                    }}>
                                    <img src="images/doctor.png" alt=" "
                                         style={{height: "90%", borderRadius: "0 0 300px 350px"}}/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div style={{paddingTop: "100px", paddingBottom: "150px", textAlign: "center"}}>
                                    <h2 style={{color: "#fff", marginBottom: "5px", fontFamily: "Roboto"}}>FEATURED
                                        RESOURCES</h2>
                                    <span style={{color: "#fff"}}>Read PDFs, Watch Videos & Listen to Audio Books</span>
                                    <br/><br/>
                                    <hr color="#fff" style={{width: "80%"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<!--BANNER START-->*/}
                    <div className="kode-banner" style={{position: "absolute", top: "850px"}}>
                        <ul className="bxslider">
                            <li>
                                <div className="row" style={{paddingLeft: "12%", paddingRight: "12%"}}>
                                    <div style={{backgroundColor: "#eee"}}>
                                        <div className="row" style={{margin: "0px", paddingTop: "20px"}}>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row" style={{paddingLeft: "12%", paddingRight: "12%"}}>
                                    <div style={{backgroundColor: "#eee"}}>
                                        <div className="row" style={{margin: "0px", paddingTop: "20px"}}>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row" style={{paddingLeft: "12%", paddingRight: "12%"}}>
                                    <div style={{backgroundColor: "#eee"}}>
                                        <div className="row" style={{margin: "0px", paddingTop: "20px"}}>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left"}}>We provide you the best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/*<!--BANNER END-->*/}

                    {/*<!--CONTENT START-->*/}
                    <div className="kode-content" style={{marginTop: "450px"}}>

                        <section className="kode-services-section">
                            <div className="container">

                                {/*<!--SECTION CONTENT START-->*/}
                                <div className="section-content" style={{padding: "0px"}}>
                                    <table style={{width: "100%", marginBottom: "0px", borderWidth: "0px"}}>
                                        <tr>
                                            <td style={{
                                                width: "25%",
                                                verticalAlign: "top",
                                                borderWidth: "0px",
                                                textAlign: "right"
                                            }}>
                                                <span style={{
                                                    fontWeight: "bold",
                                                    fontFamily: "Roboto",
                                                    fontSize: "150%"
                                                }}>Featured Resources </span>
                                            </td>
                                            <td style={{width: "65%", verticalAlign: "top", borderWidth: "0px"}}>
                                                <hr/>
                                            </td>
                                            <td style={{width: "10%", verticalAlign: "top", borderWidth: "0px"}}>
                                                <a href="/"><span
                                                    style={{fontWeight: "bold", fontFamily: "Roboto", color: "green"}}>See All</span></a>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <div className="row" style={{paddingLeft: "5%", paddingRight: "5%"}}>
                                    <div>
                                        <div className="row" style={{margin: "0px", paddingTop: "20px"}}>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px", background: "#fff"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left", color: "#777"}}>We provide you the
                                                            best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            color: "#777",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%", color: "#777"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px", background: "#fff"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left", color: "#777"}}>We provide you the
                                                            best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            color: "#777",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%", color: "#777"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px", background: "#fff"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left", color: "#777"}}>We provide you the
                                                            best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            color: "#777",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%", color: "#777"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px", background: "#fff"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left", color: "#777"}}>We provide you the
                                                            best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            color: "#777",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%", color: "#777"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px", background: "#fff"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left", color: "#777"}}>We provide you the
                                                            best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            color: "#777",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%", color: "#777"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="kode-service" style={{padding: "0px"}}>
                                                    <img src="images/instagram4.png" alt=" "
                                                         style={{
                                                             maxHeight: "200px",
                                                             width: "100%",
                                                             borderRadius: "2px 2px 0 0"
                                                         }}/>
                                                    <br/>
                                                    <div style={{padding: "15px", background: "#fff"}}>
                                                        <h3><a href="/" style={{color: "#007bff"}}>Resources Title</a>
                                                        </h3>
                                                        <p style={{textAlign: "left", color: "#777"}}>We provide you the
                                                            best
                                                            books...</p>
                                                        <p style={{
                                                            textAlign: "left",
                                                            color: "#777",
                                                            marginBottom: "0px",
                                                            borderBottom: "1px solid #000"
                                                        }}>10234
                                                            Downloads</p>
                                                        <div style={{width: "100%", color: "#777"}}>
                                                            <i className="fa fa-heart"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-download"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                            <i className="fa fa-share"
                                                               style={{
                                                                   fontSize: "100%",
                                                                   paddingBottom: "0px",
                                                                   marginBottom: "0px",
                                                                   height: "40px",
                                                                   background: "#fff",
                                                                   color: "#777"
                                                               }}> </i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </section>

                    </div>

                    {/*<!--CONTENT END-->*/}
                    <footer style={{backgroundColor: "rgb(33,34,62)"}}>
                        <div className="container">
                            <div className="row">

                                <div className="col-md-2">
                                    <div className="widget widget-text">
                                        <h2 style={{fontSize: "120%"}}>About Us</h2>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="widget widget-text">
                                        <h2 style={{fontSize: "120%"}}>Support</h2>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="widget widget-text">
                                        <h2 style={{fontSize: "120%"}}>Terms</h2>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="widget widget-text">
                                        <h2 style={{fontSize: "120%"}}>Privacy</h2>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="widget widget-text">
                                        <h2 style={{fontSize: "120%"}}>Copyright</h2>
                                    </div>
                                </div>

                                <div className="col-md-2">
                                    <div className="form-group">
                                        <select className="form-control"
                                                style={{
                                                    background: "rgb(33,34,62)",
                                                    color: "#fff",
                                                    borderRightWidth: "0px"
                                                }}>
                                            <option value="en">English</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="copyrights" style={{backgroundColor: "rgb(33,34,62)"}}>
                        <hr style={{color: "#fff", width: "80%"}}/>
                        <div className="container">
                            <p>Copyrights © 2021 @kdevtech All rights reserved</p>
                            <div className="cards">
                                <span style={{color: "#fff", fontWeight: "bold"}}>Follow Us | <i
                                    className="fa fa-linkedin-square" style={{fontSize: "150%"}}> </i> <i
                                    className="fa fa-facebook-square" style={{fontSize: "150%"}}> </i> <i
                                    className="fa fa-twitter-square" style={{fontSize: "150%"}}> </i></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!--WRAPPER END-->*/}
            </div>

        );
    }
}

export default App;
