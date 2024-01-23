import { Box, Button, Checkbox, IconButton, ImageList, ImageListItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Field, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../adminComponents/Header";
import { useEffect, useState } from "react";
import './product.css'
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {categories} from '../../constants/category'

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

    const { product, isDeleted, isUploaded } = useSelector((state) => state.product)
    const { productDetail } = useSelector((state) => state.productDetail)

    const [imagePreview, setImagePreview] = useState([])
    const [images, setImages] = useState([])
    const [open, setOpen] = useState(false);
    const [openedit, setOpenedit] = useState(false);
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [bedroom, setBedroom] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [size, setSize] = useState('')
    const [category, setCategory] = useState('')


    const isNonMobile = useMediaQuery("(min-width:600px)");

    const BannerImageChange = (e) => {

        const files = Array.from(e.target.files)
        // console.log(files);

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

    const handleSubmit = (e) => {

        e.preventDefault();

        setOpen(false);

        const myForm = new FormData();

        myForm.append('file', images)
        myForm.append('name', name)
        myForm.append('price', price)
        myForm.append('location', location)
        myForm.append('bedroom', bedroom)
        myForm.append('bathroom', bathroom)
        myForm.append('description', description)
        myForm.append('size', size)
        myForm.append('category', category)

        // dispatch(addbanner(imgForm))
        dispatch(addproduct(myForm))

        // console.log(Object.fromEntries(myForm));


    }

    let handleProductdelete = (id) => {
        dispatch(deleteproduct(id));

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseedit = () => {
        setOpenedit(false);
    };

    const handleClickOpenedit = (id) => {
        setOpenedit(true);

        dispatch(getproductDetail(id))

    };

    const handleSubmitedit = () => {
        console.log('uggjjj');
    }


    let handleChange=(e)=>{
        console.log(e.target.value);
    }





    useEffect(() => {

        if (isUploaded) {
            toast.success("Product Uploaded successfully", { position: "top-right" })

            dispatch(getbanner())
        }

        if (isDeleted) {
            toast.success("Product Deleted successfully", { position: "top-right" })

            dispatch(bannerdeleteReset())
        }
        if (productDetail) {
            setName(productDetail?.name);
            setDescription(productDetail?.description);
            setLocation(productDetail?.location);
            setBathroom(productDetail?.bathroom);
            setSize(productDetail?.size);
            setBedroom(productDetail?.bedroom);
            setPrice(productDetail?.price);
            setImages(productDetail?.image?.url)
        }


        dispatch(getbanner())
        dispatch(getproduct())
    }, [dispatch, isDeleted, isUploaded])



    return (
        <Box m="20px">
            <Header title="Manage Product" subtitle="Manage product" />

            <Box display="flex" justifyContent="end" mt="20px">

                <Button color="secondary" variant="contained" onClick={handleClickOpen}>
                    Add Product
                </Button>
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
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Location"
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                type="Number"
                                name="bathroom"
                                value={bathroom}
                                onChange={(e) => setBathroom(e.target.value)}
                                placeholder="Number of Bathroom"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                type="Number"
                                name="size"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                placeholder="Size"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                type="Number"
                                name="bedroom"
                                value={bedroom}
                                onChange={(e) => setBedroom(e.target.value)}
                                placeholder="Number of Bedrooms"
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
                            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={(e)=>setCategory(e.target.value)}
        >
            {categories?.map((cat, ind)=>(
          <MenuItem key={ind} value={cat?.value}>{cat?.name}</MenuItem>

            ))}
      
        </Select>
      </FormControl>
                        </div>
                    </Box>



                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload Product Image
                        <VisuallyHiddenInput type="file" name="file" onChange={BannerImageChange} />

                    </Button>

                    <div id="BannerImage">

                        {imagePreview.map((image, index) => (
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
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Bathroom</TableCell>
                            <TableCell align="right">Bedroom</TableCell>
                            <TableCell align="right">Size&nbsp;(sq.ft)</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {product.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img
                                        src={row?.image?.url}
                                        alt='img'
                                        loading="lazy"
                                        width={150}
                                        height={75}
                                    />
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row?.category}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.bathroom}</TableCell>
                                <TableCell align="right">{row.bedroom}</TableCell>
                                <TableCell align="right">{row.size}</TableCell>
                                <TableCell align="right"><Button style={{ color: 'white' }} onClick={() => handleClickOpenedit(row._id)} ><EditIcon /></Button></TableCell>
                                <TableCell align="right"><Button style={{ color: 'white' }} onClick={() => handleProductdelete(row._id)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




            <BootstrapDialog
                onClose={handleCloseedit}
                aria-labelledby="customized-dialog-title"
                open={openedit}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Add Product
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseedit}
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
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Product Name"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Description"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                name="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Location"
                            />

                            <TextField
                                required
                                id="outlined-required"
                                type="Number"
                                name="bathroom"
                                value={bathroom}
                                onChange={(e) => setBathroom(e.target.value)}
                                placeholder="Number of Bathroom"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                type="Number"
                                name="size"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                placeholder="Size"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                type="Number"
                                name="bedroom"
                                value={bedroom}
                                onChange={(e) => setBedroom(e.target.value)}
                                placeholder="Number of Bedrooms"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                type="Number"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Price"
                            />
                        </div>
                    </Box>



                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload Product Image
                        <VisuallyHiddenInput type="file" name="file" onChange={BannerImageChange} />

                    </Button>

                    <div id="BannerImage">

                        {imagePreview?.length > 0 ? <>{imagePreview.map((image, index) => (
                            <img src={image} key={index} alt='Avatar Preview' />
                        ))}</> : <><img src={productDetail?.image?.url} alt='Avatar Preview' />
                        </>}




                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleSubmitedit} color="secondary" variant="contained" >
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>





        </Box>
    );
};




export default HomeBanner;
