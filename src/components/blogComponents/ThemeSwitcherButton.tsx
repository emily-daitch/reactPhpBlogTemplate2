import React from "react"
import { IconButtonProps, Tooltip, IconButton } from "@mui/material"
import { DarkModeOutlined, LightModeRounded } from "@mui/icons-material"
import { useThemeContext } from "./ThemeContext"

interface ThemeSwitcherButtonProps extends IconButtonProps { }
const ThemeSwitcherButton = ({ ...rest }: ThemeSwitcherButtonProps) => {
    const { themeMode, toggleTheme } = useThemeContext()
    return (
        <Tooltip
            title={themeMode === 'light' ? `Switch to dark mode` : `Switch to light mode`}
        >
            <IconButton
                {...rest}
                onClick={toggleTheme}
            >
                {themeMode === 'light' ? <DarkModeOutlined /> : <LightModeRounded />}
            </IconButton>
        </Tooltip>
    )
}
export default ThemeSwitcherButton