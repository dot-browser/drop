import * as React from 'react';
import { WindowsControls } from 'react-windows-controls';
import { StyledToolbar, DropLogoWrapper, DropLogo } from './style';
import { remote } from 'electron';
import { icons } from '@/renderer/constants/icons';

export const Toolbar = () => (
    <StyledToolbar>
        <div><></></div>
        <WindowsControls style={{ webkitAppRegion: 'no-drag' }} onClose={() => remote.getCurrentWindow().close()} onMinimize={() => remote.getCurrentWindow().minimize()} onMaximize={() => remote.getCurrentWindow().maximize()} isMaximized={remote.getCurrentWindow().isMaximized()} />
    </StyledToolbar>
)