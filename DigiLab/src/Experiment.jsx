import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

function Experiment() {
	const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
		loaderUrl: 'build/public.loader.js',
		dataUrl: 'build/public.data',
		frameworkUrl: 'build/public.framework.js',
		codeUrl: 'build/public.wasm',
	});

	return (
		<div className=' w-full bg-slate-500 flex justify-center item-center pt-10'>
			{!isLoaded && (
				<p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
			)}
			<Unity
				className='w-full '
				unityProvider={unityProvider}
				style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
			/>
		</div>
	);
}

export default Experiment;
