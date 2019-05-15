import 'filepond/dist/filepond.min.css';
import * as React from 'react';
import {FilePond} from 'react-filepond';

// Filepond has a Typescript definition file bug. This is a JSX file as hack.
export const FilePondComponent = (props) => <FilePond {...props} />
