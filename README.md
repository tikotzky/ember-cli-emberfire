## ember-cli-emberfire

This addon that adds [`emberFire`](https://github.com/firebase/emberFire) to the generated Ember CLI output (in `vendor.js`).

### Installation / Usage

From within your Ember CLI application (must be > 0.0.34), run the following:

```bash
npm install --save-dev ember-cli-emberfire
```

### References

* [emberFire](https://github.com/firebase/emberFire)

## How this works

1. This repo lists `emberFire` as a bower dependency
1. It runs `bower install` as the `npm postinstall` script
1. it exports a tree containing both the `firebase` and `emberFire` libraries
