import { Build, Inventory, Player } from 'pixel_combats/room';

export function set_editor_inventory() {
    var roomInventory = Inventory.GetContext();
    roomInventory.Main.Value = false; 
      if (Player.id == "D411BD94CAE31F89").Inventory.Main.Value = true;
    roomInventory.Secondary.Value = false;
    roomInventory.Melee.Value = true;
    roomInventory.Explosive.Value = false;
    roomInventory.Build.Value = false;
    roomInventory.BuildInfinity.Value = false;
}

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
