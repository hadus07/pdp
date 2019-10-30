import React from 'react'
import Quill from 'react-quill'
import styles from './index.module.sass'
import 'react-quill/dist/quill.snow.css'
import { ImageModal } from './image-modal'
import { categories } from '../../constants'
import { modules, formats } from './constants'

export class Editor extends React.PureComponent {

    state = {
        name: '',
        story: '',
        category: '',
        modalVisible: false,
    }

    handleChange = story => this.setState({ story })

    handleAddPhoto = () => this.setState({ modalVisible: true })

    handleModalClose = () => this.setState({ modalVisible: false })

    handleNameChange = ({ target }) => this.setState({ name: target.value })

    handleCategSelect = ({ target }) => this.setState({ category: target.value })

    render = () => (
        <div className={styles.cont}>
            <Quill
                theme='snow'
                modules={modules}
                formats={formats}
                value={this.state.story}
                className={styles.editor}
                onChange={this.handleChange}
                placeholder='Once upon a time...'
            />
            <div className={styles.overlay}>
                <input
                    type='text'
                    placeholder='Name'
                    onChange={this.handleNameChange}
                />
                <select onChange={this.handleCategSelect}>
                    {['Select category', ...categories].map((categ, i) => (
                        <option key={categ} value={i !== 0 && categ}>
                            {categ}
                        </option>
                    ))}
                </select>
                <button onClick={this.handleAddPhoto}>Save</button>
            </div>
            <ImageModal
                onClose={this.handleModalClose}
                visible={this.state.modalVisible}
            />
        </div>
    )
}