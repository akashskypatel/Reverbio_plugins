const pluginName = () => 'TestPlugin2';
const pluginVersion = () => 'v0';
const validate = () => true;
async function asyncTest() {
  try {
    const response = await fetch('https://httpbin.org/get');
    return response.status;
  } catch (e) {
    console.error('Error in asyncTest:', e);
    return {};
  }
}