import { Build, Inventory } from 'pixel_combats/room';
import * as room from 'pixel_combats/room';
import * as teams from './default_teams.js';

// разрешает все что можно для строительства
function set_inventory() {
    const context = room.Inventory.GetContext();
    context.Main.Value = false;
    context.Secondary.Value = false;
    context.Melee.Value = true;
    context.Explosive.Value = false;
    context.Build.Value = true;
    context.BuildInfinity.Value = true;
}

// задает в контекст инвентаря пустой инвентарь
function set_empty_inventory(inventory) {
    inventory.Main.Value = false;
    inventory.Secondary.Value = false;
    inventory.Melee.Value = false;
    inventory.Explosive.Value = false;
    inventory.Build.Value = false;

export function set_editor_options() {
    Build.GetContext().Pipette.Value = true;
    Build.GetContext().FloodFill.Value = false;
    Build.GetContext().FillQuad.Value = false;
    Build.GetContext().RemoveQuad.Value = false;
    Build.GetContext().BalkLenChange.Value = false;
    Build.GetContext().FlyEnable.Value = false;
    Build.GetContext().SetSkyEnable.Value = false;
    Build.GetContext().GenMapEnable.Value = false;
    Build.GetContext().ChangeCameraPointsEnable.Value = false;
    Build.GetContext().QuadChangeEnable.Value = true;
    Build.GetContext().BuildModeEnable.Value = true;
    Build.GetContext().CollapseChangeEnable.Value = false;
    Build.GetContext().RenameMapEnable.Value = true;
    Build.GetContext().ChangeMapAuthorsEnable.Value = false;
    Build.GetContext().LoadMapEnable.Value = true;
    Build.GetContext().ChangeSpawnsEnable.Value = false;
    Build.GetContext().BuildRangeEnable.Value = false;
}
