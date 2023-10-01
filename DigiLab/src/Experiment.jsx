import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

function Experiment() {
	const { unityProvider } = useUnityContext({
		loaderUrl: 'build/public.loader.js',
		dataUrl: 'build/public.data',
		frameworkUrl: 'build/public.framework.js',
		codeUrl: 'build/public.wasm',
	});

	return (
		<div
			className=' p-10
     w-full bg-slate-500 flex justify-center item-center'
		>
			<Unity className='w-full ' unityProvider={unityProvider} />
		</div>
	);
}

export default Experiment;
