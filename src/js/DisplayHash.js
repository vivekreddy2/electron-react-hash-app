import React, {useState, useEffect} from 'react';
import { getHash, copyToClipboard } from './helpers';
import './displayHash.scss'

export default function ({ hashType, text }) {
  const [hashedText, setHashedText] = useState('');

  useEffect(() => {
    setHashedText(getHash(hashType, text));
  }, [text])

	return (
		<div className='row'>
			<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
				<h3 className='hash-heading'>
					{hashType.toUpperCase()}
          {' '}
					<button onClick={() =>copyToClipboard(hashedText)}>copy</button>
				</h3>
				<pre id='md5-output' className='hash-output'>
					{hashedText}
				</pre>
			</div>
		</div>
	);
}
