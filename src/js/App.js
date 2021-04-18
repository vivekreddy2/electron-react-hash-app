import React, { useState } from 'react';
import DisplayHash from './DisplayHash';

const hashTypeList = ['md5', 'sha1', 'sha256', 'sha512'];

export default function App() {
	const [text, setText] = useState('');
  
	return (
		<div className="container">
			<h1>Hash App</h1>
			<div className={'row'}>
				<div className={'col-xs-12 col-sm-12 col-md-12 col-lg-12 '}>
					<h3 className={'hash-heading'}>Input</h3>
					<textarea
						rows={'2'}
						value={text}
						className={'form-control text-input'}
						placeholder={'Enter text and see it hashed...'}
						onChange={(event) => setText(event.target.value)}
					/>
				</div>
			</div>
      {
        hashTypeList.map( hashType => (
          <DisplayHash hashType={hashType} text={text} key={hashType}/>
        ))
      }
		</div>
	);
}
