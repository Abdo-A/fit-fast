import * as Permissions from 'expo-permissions';

// Camera Permission
export const ensureCameraPermission = async (callback) => {
  const { status: cameraStatus } = await Permissions.getAsync(
    Permissions.CAMERA
  );
  if (cameraRollStatus !== 'granted') {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (callback) callback();
  } else if (cameraRollStatus === 'granted') {
    if (callback) callback();
  }
};

// Camera Roll Permission
export const ensureCameraRollPermission = async (callback) => {
  const { status: cameraRollStatus } = await Permissions.getAsync(
    Permissions.CAMERA_ROLL
  );
  if (cameraRollStatus !== 'granted') {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (callback) callback();
  } else if (cameraRollStatus === 'granted') {
    if (callback) callback();
  }
};
