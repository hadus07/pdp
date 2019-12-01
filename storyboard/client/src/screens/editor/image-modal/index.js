import React from 'react'
import styles from './index.module.sass'
import Paper from '@material-ui/core/Paper'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

export const ImageModal = props => (
    <Modal
        open={props.visible}
        closeAfterTransition
        onClose={props.onClose}
        className={styles.modal}
    >
        <Paper className={styles.cont}>
            <img src={props.image || 'https://images1.penguinrandomhouse.com/cover/9781594633409'} alt='Cover'/>
            <div>
                <input type='file' id='fileUploader' onChange={props.onChange}/>
                <Button onClick={props.onAddPhoto} size="small" color="primary" variant='outlined'>
                    <label htmlFor='fileUploader'>Add Cover Photo</label>
                </Button>
                <Button onClick={props.onSave} size="small" color="primary" variant='contained'>
                    Save
                </Button>
            </div>
        </Paper>
    </Modal>
)