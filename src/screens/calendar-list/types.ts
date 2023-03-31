import { ViewToken } from 'react-native/types';

export interface OnScrollToIndexFailed {
    index: number;
    highestMeasuredFrameIndex: number;
    averageItemLength: number;
}

export interface OnViewableItemsChanged {
    viewableItems: Array<ViewToken>;
    changed: Array<ViewToken>;
}

export interface InnerListData {
    id: number,
    label: string,
    desc: string,
}

export interface ListData {
    [key: string]: InnerListData[]
}
