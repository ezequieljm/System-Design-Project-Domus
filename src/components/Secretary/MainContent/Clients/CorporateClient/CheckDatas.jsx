import React from 'react';
import { Grow } from '@material-ui/core';
import FormFill from './FormFill';
import ListDocs from '../UploadDocuments/ListDocs';

export default function Check() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <FormFill />
      <ListDocs widthSize={'50%'}/>
    </div>
  );
};