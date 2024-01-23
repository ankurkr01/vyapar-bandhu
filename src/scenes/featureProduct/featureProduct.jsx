import { Box, Button, Checkbox, IconButton, ImageList, ImageListItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Field, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../adminComponents/Header";
import { useEffect, useState } from "react";
import './featureProduct.css'
import { toast } from "react-toastify";

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getproduct, addproduct, deleteproduct } from "../../redux/actions/productAction";
import { addbanner, clearError, deletebanner, getbanner } from "../../redux/actions/homeBannerAction";
import { addfeaturedproduct, deletefeaturedproduct, getfeaturedproduct } from "../../redux/actions/featuredProductAction";
import { useDispatch, useSelector } from 'react-redux'
import { bannerdeleteReset } from "../../redux/slices/homeBannerSlice";
import EditIcon from '@mui/icons-material/Edit';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getproductDetail } from "../../redux/actions/productDetailAction";
import { featuredproductdeleteReset } from "../../redux/slices/featuredProductSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,

});


const HomeBanner = () => {

    const dispatch = useDispatch();
    // const navigate = useNavigate()

    const { featuredproduct,isUploaded ,isDeleted} = useSelector((state) => state.featuredproduct)

    const [imagePreview, setImagePreview] = useState([])
    const [bimagePreview, setBImagePreview] = useState([])
    const [images, setImages] = useState([])
    const [open, setOpen] = useState(false);
    const [openedit, setOpenedit] = useState(false);
    const [name, setName] = useState('')
    const [background, setBackground] = useState('')

    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')




    const isNonMobile = useMediaQuery("(min-width:600px)");

    const BannerImageChange = (e) => {

        const files = Array.from(e.target.files)
        console.log(files);

        setImages([]);
        setImagePreview([])

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePreview((old) => [...old, reader.result])
                    setImages((old) => [...old, reader.result])
                }
            }

            reader.readAsDataURL(file);

        })


    }
    const backgroundImage = (e) => {

        const files = Array.from(e.target.files)
        console.log(files);

        setBackground([]);
        setBImagePreview([])

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setBImagePreview((old) => [...old, reader.result])
                    setBackground((old) => [...old, reader.result])
                }
            }

            reader.readAsDataURL(file);

        })


    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setOpen(false);

        const myForm = new FormData();

        myForm.append('profileImage', images)
        myForm.append('backgroundImage', background)
        myForm.append('name', name)
        myForm.append('price', price)
        myForm.append('description', description)

        // dispatch(addbanner(imgForm))
        dispatch(addfeaturedproduct(myForm))



    }

    let handleProductdelete = (id) => {
        dispatch(deletefeaturedproduct(id));

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {

        if (isUploaded) {
            toast.success("Product Uploaded successfully", { position: "top-right" })

            dispatch(getfeaturedproduct())
        }

        if (isDeleted) {
            toast.success("Product Deleted successfully", { position: "top-right" })

            dispatch(featuredproductdeleteReset())
        }

        dispatch(getfeaturedproduct())

    }, [dispatch, isDeleted, isUploaded])



    return (
        <Box m="20px">
            <Header title="Manage Featured Product" subtitle="Manage Featured product" />

            <Box display="flex" justifyContent="end" mt="20px">

                {featuredproduct?.length<3?<><Button color="secondary" variant="contained" onClick={handleClickOpen}>
                    Add Product
                </Button></>:<></>}
            </Box>



            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Add Product
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Product Name"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                type="Number"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Price"
                            />
                        </div>
                        <p>Images Should be less than 350kb</p>
                    </Box>



                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload Profile Image
                        <VisuallyHiddenInput type="file" name="profileImage" onChange={BannerImageChange} />

                    </Button>
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload Background Image
                        <VisuallyHiddenInput type="file" name="backgroundImage" onChange={backgroundImage} />

                    </Button>

                    <div id="BannerImage">

                        {imagePreview.map((image, index) => (
                            <img src={image} key={index} alt='Avatar Preview' />
                        ))}
                        {bimagePreview.map((image, index) => (
                            <img src={image} key={index} alt='Avatar Preview' />
                        ))}

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmit} color="secondary" variant="contained" >
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Profile</TableCell>
                            <TableCell align="center">Background</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Upload Background</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {featuredproduct.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img
                                        src={row?.profileImage?.url}
                                        alt='img'
                                        loading="lazy"
                                        width={150}
                                        height={75}
                                    />
                                </TableCell>
                                <TableCell align="right">   <img
                                    src={row?.backgroundImage?.url}
                                    alt='img'
                                    loading="lazy"
                                    width={150}
                                    height={75}
                                /></TableCell>
                                <TableCell align="right">{row.name}</TableCell>

                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">657856</TableCell>
                                <TableCell align="right"><Button style={{ color: 'white' }} onClick={() => handleProductdelete(row._id)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>









        </Box>
    );
};




export default HomeBanner;
