import React,{Fragment,useState}  from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import InfiniteScroll from 'react-infinite-scroll-component';


 
const ImageResults = ({ images,fetchPost }) => {
    const [open,setOpen]=useState(false)
    const [currentImg, setImage] = useState('')
     
    const handleOpen = img => {
        setImage(img);
        setOpen(true)
    };
    
    const handleClose = () => {
        setOpen(false)
    };
     
    
    const actions = [
        <FlatButton lael="Close" primary={true} onClick={handleClose}/>
    ]
    return (
        <Fragment>
            <InfiniteScroll
            dataLength={images.length}
            next={fetchPost}
            hasMore={true}
             
            >
            <GridList col={4}>
                {images.map(img => (
                    <GridTile
                        title={img.tags}
                        key={img.id}
                        subtitle={
                            <span>
                                by <strong>
                                    {img.user}
                                </strong>
                            </span> 
                        }
                        actionIcon={
                            <IconButton
                                onClick={()=>handleOpen(img.largeImageURL)}
                            >
                            <ZoomIn color="white"/>
                            </IconButton>
                        }
                    >
                        <img src={img.largeImageURL} alt=""/>
                </GridTile>
           ))}
            </GridList>
            <Dialog
                actions={actions}
                modal={false}
                open={open}
                onRequestClose={handleClose}>
                <img src={currentImg} alt="" style={{width:'100%'}}/>
                </Dialog>
                </InfiniteScroll>
        </Fragment>
    )
}

ImageResults.propTypes = {
    images:PropTypes.array
}

export default ImageResults

