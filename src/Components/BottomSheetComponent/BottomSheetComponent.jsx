import React, { useEffect, useRef } from 'react';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import { scaleHeight } from '../../Utils/Scale/Scale';
import PropTypes from 'prop-types';

const BottomSheetComponent = ({ children, show }) => {
	const bottomSheetRef = useRef();

	useEffect(() => {
		if (show) {
			bottomSheetRef.current.show();
		}
	}, [show]);

	return (
		<BottomSheet
			hasDraggableIcon
			ref={bottomSheetRef}
			height={scaleHeight(400)}
			testID="bottomSheet"
		>
			{children}
		</BottomSheet>
	);
};

BottomSheetComponent.propTypes = {
	children: PropTypes.node,
	show: PropTypes.bool,
};

export default BottomSheetComponent;
